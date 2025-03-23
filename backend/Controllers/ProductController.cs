using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class ProductController : Controller
    {
        private readonly List<Product> products =
        [
            new Product
            {
                Id = 1,
                Img = "https://placehold.co/600x400",
                Title = "Product 1",
                Price = 100,
                Category = new List<string> { "Category 1", "Category 2" },
                Description = "Description 1"
            },
            new Product
            {
                Id = 2,
                Img = "https://placehold.co/600x400",
                Title = "Product 2",
                Price = 200,
                Category = new List<string> { "Category 1", "Category 3" },
                Description = "Description 2"
            },
            new Product
            {
                Id = 3,
                Img = "https://placehold.co/600x400",
                Title = "Product 3",
                Price = 300,
                Category = new List<string> { "Category 2", "Category 3" },
                Description = "Description 3"
            }
        ];

        [HttpGet]
        [Route("/getProducts")]
        public IActionResult Index()
        {
            Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:3000"); // Adres frontendowy Nuxt3
            Response.Headers.Append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            Response.Headers.Append("Access-Control-Allow-Headers", "Content-Type");
            return Json(products);
        }
    }
}
