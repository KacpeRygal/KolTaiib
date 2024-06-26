using Microsoft.AspNetCore.Mvc;
using WebApi.BLL;
using WebApi.DTOs;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlawiaturaController : Controller
    {
        public IService _service;

        public KlawiaturaController(IService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IEnumerable<KlawiaturaResponseDTO> Get()
        {
            return this._service.GetKlawiaturyResponseDTOs();
        }

        [HttpDelete]
        public void Delete(int id)
        {
            this._service.DeleteKlawiatura(id);
        }

        [HttpPost]
        public void Post([FromBody] KlawiaturaRequestDTO KlawiaturaRequestDTO)
        {
            this._service.PostKlawiatura(KlawiaturaRequestDTO);
        }
    }
}
