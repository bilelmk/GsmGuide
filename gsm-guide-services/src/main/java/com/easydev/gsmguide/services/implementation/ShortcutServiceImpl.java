package com.easydev.gsmguide.services.implementation;

import com.easydev.gsmguide.dtos.ShortcutDto;
import com.easydev.gsmguide.dtos.ShortcutListDto;
import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.models.Shortcut;
import com.easydev.gsmguide.repositories.ShortcutRepository;
import com.easydev.gsmguide.services.ShortcutService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<ShortcutListDto> getAll() {
        List<Shortcut> shortcuts = shortcutRepository.findAll() ;
        List<ShortcutListDto> shortcutLists = new ArrayList<>() ;

        for(Shortcut shortcut: shortcuts) {
            boolean isMarkExist = false ;
            for(ShortcutListDto shortcutListDto: shortcutLists) {
                if(shortcutListDto.getMarkId() == shortcut.getMark().getMarkId()) {
                    isMarkExist = true ;
                    ShortcutDto shortcutDto = new ShortcutDto(shortcut.getId() , shortcut.getName() , shortcut.getCode());
                    shortcutListDto.getShortcuts().add(shortcutDto) ;
                }
            }
            if(!isMarkExist) {
                ShortcutDto shortcutDto = new ShortcutDto(shortcut.getId() , shortcut.getName() , shortcut.getCode());
                List<ShortcutDto> shortcutDtoList = new ArrayList<>() ; shortcutDtoList.add(shortcutDto) ;
                ShortcutListDto newShortcutLists = new ShortcutListDto(shortcut.getMark().getMarkId(), shortcut.getMark().getName() ,shortcutDtoList) ;
                shortcutLists.add(newShortcutLists) ;
            }
        }
        return shortcutLists;
    }
}
