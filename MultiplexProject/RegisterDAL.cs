using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public class RegisterDAL : IRegister
    {
        CodeFirstMultiplex db = null;
        public RegisterDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }
        public string ChangePassword(long mobno, string oldpassword, string newpassword)
        {
            try
            {

               
                var data = db.Registers.Where(x => x.MobileNo == mobno &&
                   x.Password == EncodePasswordToBase64(oldpassword)).FirstOrDefault();
                if (data == null)
                {
                    throw new Exception("Oldpassword is not matching");

                }
                else
                {

                    data.Password = EncodePasswordToBase64(newpassword);
                   var res =  db.SaveChanges();
                    if (res == 1)
                        return "New Password updated";
                }
            }
            catch
            {
                throw;
            }
            return string.Empty;
        }

        public string ForgotPassword(long mobno)//old password
        {
            try
            {

                var data = db.Registers.Where(x => x.MobileNo == mobno).FirstOrDefault();
                if(data != null)
                {
                  data.Password = EncodePasswordToBase64(CreatePassword());
/*                  data.Password = EncodePasswordToBase64(new Random().Next(10000,20000).ToString());
*/                    var res = db.SaveChanges();
                    if (res > 0)
                        return DecodeFrom64(data.Password);
                }else
                {
                    return "invalid mobilenumber";
                }
            }
            catch
            {
                throw;
            }
            return string.Empty;
        }
        public string CreatePassword()
        {
            int length = 8;
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()/<>?,.:;";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            return res.ToString();
        }
        public Register GetUserByMobNo(long mobno)
        {
            try
            {
                var data = db.Registers.Where(x => x.MobileNo == mobno).FirstOrDefault();
                if (data == null)
                    throw new Exception("Invalid Customer ID");
                else
                    return data;
            }
            catch
            {
                throw;
            }
        }

        public string Login(long mobno, string password)
        {
            try
            {
                String epass = EncodePasswordToBase64(password);
                var data = db.Registers.Where(x => x.MobileNo == mobno &&
                x.Password == epass).FirstOrDefault();
                if (data == null)
                {
                    return string.Empty;
                }
                else
                {
                    return data.MobileNo+""+data.RegType;
                }
            }
            catch
            {
                throw;
            }
        }

        public string RegisterCustomer(Register customer)
        {
            try
            {
                customer.Password = EncodePasswordToBase64(customer.Password);
                db.Registers.Add(customer);
                var res = db.SaveChanges();
                if (res > 0)
                    return "Added "+customer.RegType+" "+customer.Name+ " successfully";
            }
            catch
            {
                throw;
            }
            return "Unsuccesful request";
        }
        public static string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encData_byte = new byte[password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        }
        //this function Convert to Decord your Password
        public string DecodeFrom64(string encodedData)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            return result;
        }
    }
}
