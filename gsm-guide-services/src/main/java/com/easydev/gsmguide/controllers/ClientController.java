package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Client;
import com.easydev.gsmguide.services.ClientService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/clients")
public class ClientController {

    private final ClientService clientService ;

    public ClientController(ClientService clientService) {
        this.clientService = clientService ;
    }

//    @GetMapping
//    public List<Client> getAll() {
//        return clientService.getAll() ;
//    }

    @PostMapping
    public Client add(@RequestBody Client client) {
        return clientService.add(client) ;
    }

//    @PutMapping
//    public Category update(@RequestPart(value = "image", required = false) MultipartFile image ,
//                           @RequestPart("category") Category category) throws IOException {
//        return categoryService.update(image, category) ;
//    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        clientService.delete(id) ;
    }
}
