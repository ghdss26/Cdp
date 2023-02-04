package com.apiproject.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProdutoDto {

    @NotBlank
    private String titulo;

    @NotNull
    private BigDecimal preco;

    @NotNull
    private Integer estoque;

    @NotBlank
    private String status;

}
