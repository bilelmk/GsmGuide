package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.dtos.ShortcutListDto;
import com.easydev.gsmguide.models.Shortcut;
import com.easydev.gsmguide.services.ShortcutService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/shortcuts")
public class ShortcutController {

    private final ShortcutService shortcutService ;

    public ShortcutController(ShortcutService shortcutService) {
        this.shortcutService = shortcutService ;
    }

    @GetMapping()
    public List<ShortcutListDto> getAll() {
        return shortcutService.getAll();
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


