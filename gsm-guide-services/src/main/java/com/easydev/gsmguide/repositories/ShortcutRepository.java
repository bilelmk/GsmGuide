package com.easydev.gsmguide.repositories;

import com.easydev.gsmguide.models.Shortcut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortcutRepository  extends JpaRepository<Shortcut, Long> {
}
