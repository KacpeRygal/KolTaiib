using WebApi.DTOs;
using WebApi.Model;

namespace WebApi.BLL
{
    public class Service : IService
    {
        static List<Klawiatura> KlawiaturaList = new()
        {
            new Klawiatura {Id=1,Model="Klawiatura1",Rodzaj=RodzajTypeEnum.optyczna},
            new Klawiatura {Id=2,Model="Klawiatura2",Rodzaj=RodzajTypeEnum.hybrydowa},
            new Klawiatura {Id=3,Model="Klawiatura3",Rodzaj=RodzajTypeEnum.membranowa},
            new Klawiatura {Id=4,Model="Klawiatura4",Rodzaj=RodzajTypeEnum.nożycowa},
            new Klawiatura {Id=5,Model="Klawiatura5",Rodzaj=RodzajTypeEnum.optyczna},
            new Klawiatura {Id=6,Model="Klawiatura6",Rodzaj=RodzajTypeEnum.nożycowa},
            new Klawiatura {Id=7,Model="Klawiatura7",Rodzaj=RodzajTypeEnum.mechaniczna},
        };
        public void DeleteKlawiatura(int id)
        {
            foreach (Klawiatura m in KlawiaturaList)
            {
                if (m.Id == id)
                {
                    KlawiaturaList.Remove(m);
                    break;
                }
            }
            //throw new Exception($"Nie znaleziono klawiaturaki o id = {id}");
        }

        public IEnumerable<KlawiaturaResponseDTO> GetKlawiaturyResponseDTOs()
        {
            return KlawiaturaList.Select(x => ToKlawiaturaResponseDTO(x));
        }

        public void PostKlawiatura(KlawiaturaRequestDTO klawiaturaRequestDTO)
        {
            Klawiatura klawiaturakiDodana = new()
            {
                Id = KlawiaturaList.Max(x => x.Id) + 1,
                Model = klawiaturaRequestDTO.Model,
                Rodzaj = klawiaturaRequestDTO.Rodzaj
            };
            KlawiaturaList.Add(klawiaturakiDodana);
        }

        KlawiaturaResponseDTO ToKlawiaturaResponseDTO(Klawiatura klawiatura)
        {
            return new KlawiaturaResponseDTO
            {
                Id = klawiatura.Id,
                Model = klawiatura.Model,
                Rodzaj = klawiatura.Rodzaj
            };
        }
    }
}
