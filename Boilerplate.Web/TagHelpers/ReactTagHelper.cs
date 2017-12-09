using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.AspNetCore.SpaServices.Prerendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boilerplate.Web.TagHelpers
{
    public class ReactTagHelper : PrerenderTagHelper
    {
        public ReactTagHelper(IServiceProvider serviceProvider) : base(serviceProvider) { }

        [HtmlAttributeName("src")]
        public string Source { get; set; } = "./wwwroot/dist/server.js";

        [HtmlAttributeName("component")]
        public string Component { get; set; }

        [HtmlAttributeName("data")]
        public object Data { get; set; }

        public override void Init(TagHelperContext context)
        {
            base.Init(context);
        }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "div";
            output.Attributes.SetAttribute("id", $"Components.{Component}");

            ModuleName = Source;
            ExportName = Component;
            CustomDataParameter = Data;

            await base.ProcessAsync(context, output);
        }
    }
}
