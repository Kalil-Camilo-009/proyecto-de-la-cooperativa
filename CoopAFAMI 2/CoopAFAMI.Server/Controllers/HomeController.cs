using Microsoft.AspNetCore.Mvc;

namespace CoopAFAMI.Server.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
