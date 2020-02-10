using System;
using Microsoft.AspNetCore.Builder;
using OnlineCompiler.Middleware;

namespace OnlineCompiler.Utilities
{
    public static class ApplicationBuilderExtensions
    {
        public static void UseWebpackAssets(this IApplicationBuilder builder, IWebpackAssetsResolver assetsResolver)
        {
            builder.UseMiddleware<WebpackAssetsMiddleware>(assetsResolver);
        }
    }
}
