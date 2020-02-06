using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Features;
using OnlineCompiler.Utilities;

namespace OnlineCompiler.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(ILanguagesProvider provider)
        {
            var langs = provider.GetAvailable();
        }
        
        public IActionResult Index()
        {
            return View();
        }
    }
}
