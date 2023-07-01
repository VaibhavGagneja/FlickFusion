using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public interface IRegister {
        Register GetUserByMobNo(long mobno);

        string Login(long mobno, string password);
        string RegisterCustomer(Register customer);

        string ForgotPassword(long mobno);
        string ChangePassword(long mobno,string oldpassword,string newpassword);
    }
}
