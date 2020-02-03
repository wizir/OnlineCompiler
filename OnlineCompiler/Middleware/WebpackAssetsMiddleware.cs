using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using OnlineCompiler.Utilities;

namespace OnlineCompiler.Middleware
{
    public class WebpackAssetsMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IWebpackAssetsResolver _resolver;

        public WebpackAssetsMiddleware(RequestDelegate next, IWebpackAssetsResolver resolver)
        {
            _next = next;
            _resolver = resolver;
        }


        public async Task InvokeAsync(HttpContext context)
        {
            context.RegisterWebpackAssetsResolver(_resolver);

            await _next(context);
        }
        
    }
}
