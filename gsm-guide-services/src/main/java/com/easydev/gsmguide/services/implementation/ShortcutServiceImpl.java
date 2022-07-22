package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.models.Shortcut;
import com.easydev.gsmguide.repositories.ShortcutRepository;
import com.easydev.gsmguide.services.ShortcutService;
import org.springframework.stereotype.Service;

@Service
public class ShortcutServiceImpl implements ShortcutService {

    private final ShortcutRepository shortcutRepository ;

    ShortcutServiceImpl(ShortcutRepository shortcutRepository) {
        this.shortcutRepository = shortcutRepository ;
    }

    @Override
    public Shortcut add(Shortcut shortcut) {
        return shortcutRepository.save(shortcut);
    }

    @Override
    public void delete(long id) {
        shortcutRepository.deleteById(id);
    }
}
