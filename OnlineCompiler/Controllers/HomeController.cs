using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Utilities;

namespace OnlineCompiler.Controllers
{
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
