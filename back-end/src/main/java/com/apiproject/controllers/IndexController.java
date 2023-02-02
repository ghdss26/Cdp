package com.apiproject.controllers;

import com.apiproject.dtos.ProdutoDto;
import com.apiproject.models.ProdutoModel;
import com.apiproject.services.ProdutoServices;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("api/produtos")
public class IndexController {

    final ProdutoServices produtosServices;

    @PostMapping
    public ResponseEntity<Object> saveProduto(@RequestBody @Valid ProdutoDto dto) {
        var produtoModel = new ProdutoModel();
        BeanUtils.copyProperties(dto, produtoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtosServices.save(produtoModel));
    }

    @GetMapping
    public ResponseEntity<Object> produtos() {
        return ResponseEntity.status(HttpStatus.OK).body(produtosServices.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Object> getProduto(@PathVariable(value = "id") UUID id) {
        Optional<ProdutoModel> produtoModelOptional = produtosServices.findById(id);
        if (produtoModelOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }
        return ResponseEntity.status(HttpStatus.OK).body(produtoModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable(value = "id") UUID id) {
        Optional<ProdutoModel> produtoModelOptional = produtosServices.findById(id);
        if (produtoModelOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }
        produtosServices.delete(produtoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("O produto " + produtoModelOptional.get().getTitulo() +
                " foi deletado com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduto(@PathVariable(value = "id") UUID id,
                                                @RequestBody @Valid ProdutoDto produtoDto) {
        Optional<ProdutoModel> produtoModelOptional = produtosServices.findById(id);
        if (produtoModelOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }
        var produtoModel = new ProdutoModel();
        BeanUtils.copyProperties(produtoDto, produtoModel);
        produtoModel.setId(produtoModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(produtosServices.save(produtoModel));
    }

}
