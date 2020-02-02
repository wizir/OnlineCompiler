using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Utilities;

namespace OnlineCompiler.Controllers
{
    public class BaseController : Controller
    {
        public BaseController(IWebpackAssetsResolver webpackAssetsResolver)
        {
            HttpContext.RegisterWebpackAssetsResolver(webpackAssetsResolver);
        }
    }
}
