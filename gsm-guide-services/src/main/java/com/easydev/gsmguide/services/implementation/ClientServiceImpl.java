package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.dtos.EmailDto;
import com.easydev.gsmguide.models.Client;
import com.easydev.gsmguide.repositories.ClientRepository;
import com.easydev.gsmguide.services.ClientService;
import com.easydev.gsmguide.services.MailingService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository ;
    private final PasswordEncoder passwordEncoder;
    private final MailingService mailingService;
    private final Random random = new Random();

    public ClientServiceImpl(ClientRepository clientRepository, PasswordEncoder passwordEncoder, MailingService mailingService) {
        this.clientRepository = clientRepository ;
        this.passwordEncoder = passwordEncoder ;
        this.mailingService = mailingService ;
    }

    @Override
    public List<Client> getAll() {
        return null;
    }

    @Override
    public Client add(Client client) {
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        client.setValid(true);
        client.setConfirmed(false);
        String code = Integer.toString(100000 + random.nextInt(899999) + 1);
        this.mailingService.sendMail(new EmailDto(client.getEmail(), code));
        return clientRepository.save(client);
    }

    @Override
    public Client update(Client client) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
