using WebApi.Model;

namespace WebApi.DTOs
{
    public class KlawiaturaResponseDTO
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public RodzajTypeEnum Rodzaj { get; set; }
    }
}
