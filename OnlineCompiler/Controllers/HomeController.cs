using Microsoft.AspNetCore.Mvc;

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
