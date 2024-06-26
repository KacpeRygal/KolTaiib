namespace WebApi.Model
{
    public class Klawiatura
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public RodzajTypeEnum Rodzaj { get; set; }
    }
    public enum RodzajTypeEnum
    {
        membranowa,
        nożycowa,
        mechaniczna,
        optyczna,
        hybrydowa
    }
}
