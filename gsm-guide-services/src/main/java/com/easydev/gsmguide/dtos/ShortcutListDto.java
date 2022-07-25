package com.easydev.gsmguide.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShortcutListDto {
    private Long markId ;
    private String markName ;
    private List<ShortcutDto> shortcuts ;
}
