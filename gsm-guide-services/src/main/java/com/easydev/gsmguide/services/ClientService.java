package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Client;
import java.util.List;

public interface ClientService {
    public List<Client> getAll() ;
    public Client add(Client client) ;
    public Client update(Client client);
    public void delete(Long id) ;
}
