package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Shortcut;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShortcutRepository  extends JpaRepository<Shortcut, Long> {
}
