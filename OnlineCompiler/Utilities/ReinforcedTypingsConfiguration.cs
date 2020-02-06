using System.IO;
using System.Linq;
using System.Reflection;
using Reinforced.Typings.Attributes;
using Reinforced.Typings.Fluent;

namespace OnlineCompiler.Utilities
{
    public static class ReinforcedTypingsConfiguration
    {
        public static void Configure(ConfigurationBuilder builder)
        {
            builder.Global(config =>
            {
                config.CamelCaseForMethods();
                config.CamelCaseForProperties();
            });
            
            var componentViewModelTypes = typeof(ReinforcedTypingsConfiguration).Assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<TsInterfaceAttribute>() != null);

            foreach (var componentViewModelType in componentViewModelTypes)
            {
                builder.ExportAsInterfaces(new [] { componentViewModelType }, b =>
                {
                    b.DontIncludeToNamespace();
                    b.AutoI(false);
                    b.WithAllMethods(m => m.Ignore());

                    var fileName = componentViewModelType.IsGenericType ? 
                        componentViewModelType.Name.Substring(0, componentViewModelType.Name.IndexOf('`')) : 
                        componentViewModelType.Name;
                    
                    b.ExportTo(string.Join(
                        Path.DirectorySeparatorChar.ToString(), 
                        componentViewModelType.Namespace.Split('.').Skip(1).Concat(new [] { $"{fileName}.csharp.ts" })));
                });
            }

            var enumTypes = typeof(ReinforcedTypingsConfiguration).Assembly.GetTypes()
                .Where(t => t.GetCustomAttribute<TsEnumAttribute>() != null);

            foreach (var enumType in enumTypes)
            {
                builder.ExportAsEnums(new [] { enumType }, b =>
                {
                    b.Const();
                    b.DontIncludeToNamespace();
                    b.ExportTo(string.Join(
                        Path.DirectorySeparatorChar.ToString(), 
                        enumType.Namespace.Split('.').Skip(1).Concat(new [] { $"{enumType.Name}.csharp.ts" })));
                });
            }
        }
        }
}
