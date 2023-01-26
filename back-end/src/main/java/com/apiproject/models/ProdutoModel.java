package com.apiproject.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "produtos")
public class ProdutoModel {
    private static final long serialVesionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name="titulo", nullable=false, length=50)
    private String titulo;

    @Column(name = "preco", nullable = false)
    private BigDecimal preco;

    @Column(name = "estoque", nullable = false)
    private Integer estoque;


}
