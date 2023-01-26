package com.apiproject.repositories;

import com.apiproject.models.ProdutoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, UUID> {

    Object deleteById(Optional<ProdutoModel> byId);
}
