
using WebApi.DTOs;

namespace WebApi.BLL
{
    public interface IService
    {
        IEnumerable<KlawiaturaResponseDTO> GetKlawiaturyResponseDTOs();
        void DeleteKlawiatura(int id);
        void PostKlawiatura(KlawiaturaRequestDTO klawiaturaRequestDTO);
    }
}
