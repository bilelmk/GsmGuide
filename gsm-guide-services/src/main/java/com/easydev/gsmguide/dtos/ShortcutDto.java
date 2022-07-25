package com.easydev.gsmguide.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShortcutDto {
    private Long id ;
    private String name ;
    private String code ;
}
