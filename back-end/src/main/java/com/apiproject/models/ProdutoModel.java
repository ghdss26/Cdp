package com.apiproject.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
//@SQLDelete(sql = "UPDATE produtos SET status = 'Inativo' WHERE id = ?")
//@Where(clause = "status = 'Ativo'")
@Table(name = "produtos")
public class ProdutoModel {
    private static final long serialVesionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 100)
    @Column(name="titulo", nullable=false, length=100)
    private String titulo;

    @Column(name = "preco", nullable = false)
    private BigDecimal preco;

    @Column(name = "estoque", nullable = false)
    private Integer estoque;

    @NotNull
    @Length(max = 10)
    @Column(name = "status", nullable=false, length=100)
    private String status;

}
