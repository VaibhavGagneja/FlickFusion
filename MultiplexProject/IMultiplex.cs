using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public interface IMultiplex
    {
        bool AddMultiplex(Multiplex multiplex);
        bool DeleteMultiplex(int MultiplexId);
        List<Multiplex> ShowAllMultiplex();

       // bool UpdateMultiplex(int MultiplexId, Multiplex multiplex);
    }
}
