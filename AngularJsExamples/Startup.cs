using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJsExamples.Startup))]
namespace AngularJsExamples
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
