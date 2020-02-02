using Microsoft.AspNetCore.Mvc;

namespace OnlineCompiler.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}