package com.easydev.gsmguide.services;

import com.easydev.gsmguide.models.Actuality;
import com.easydev.gsmguide.models.Shortcut;

public interface ShortcutService {
    Shortcut add(Shortcut shortcut);
    void delete(long id);
}
