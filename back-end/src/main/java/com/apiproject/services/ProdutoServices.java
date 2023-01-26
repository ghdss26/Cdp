package com.apiproject.services;

import com.apiproject.models.ProdutoModel;
import com.apiproject.repositories.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;
import java.util.UUID;

@Service
public class ProdutoServices {

    final
    ProdutoRepository produtosRepository;


    public ProdutoServices(ProdutoRepository produtosRepository) {
        this.produtosRepository = produtosRepository;
    }

    @Transactional
    public ProdutoModel save(ProdutoModel model) {
        return produtosRepository.save(model);
    }

    public Optional<ProdutoModel> findById(UUID id) {
        return produtosRepository.findById(id);
    }

    public Object findAll() {
        return produtosRepository.findAll();
    }

    public void delete(ProdutoModel model) {
        produtosRepository.delete(model);
    }
}
