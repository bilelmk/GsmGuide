package com.easydev.gsmguide.services;

import com.easydev.gsmguide.dtos.ShortcutListDto;
import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.models.Shortcut;

import java.util.List;

public interface ShortcutService {
    Shortcut add(Shortcut shortcut);
    void delete(long id);
    List<ShortcutListDto> getAll();
}
