using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Product
    {
    public int Id { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public List<string> Category { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
