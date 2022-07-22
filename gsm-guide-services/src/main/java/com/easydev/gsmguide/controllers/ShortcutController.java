package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Shortcut;
import com.easydev.gsmguide.services.ShortcutService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/shortcuts")
public class ShortcutController {

    private final ShortcutService shortcutService ;

    public ShortcutController(ShortcutService shortcutService) {
        this.shortcutService = shortcutService ;
    }

    @PostMapping()
    public Shortcut add(@RequestBody() Shortcut shortcut) {
        return shortcutService.add(shortcut);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        shortcutService.delete(id);
    }
}


