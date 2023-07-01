using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public interface IScreen
    {
        bool AddScreen(Screen screen);
        bool DeleteScreen(int ScreenId);
       List<CustomModel> ShowAllScreen();//custom model to view which screen maps to which movie
        public List<CustomModel> GetScreenByMultiplexId(int id);

       // bool UpdateScreen(int ScreenId, Screen screen);
    }
}
