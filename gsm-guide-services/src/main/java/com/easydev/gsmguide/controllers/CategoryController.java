package com.easydev.gsmguide.controllers;

import com.easydev.gsmguide.models.Category;
import com.easydev.gsmguide.services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {

	private final CategoryService categoryService;

	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService ;
	}

	@GetMapping()
	public List<Category> getAll() {
		return categoryService.getAll();
	}

	@GetMapping("{id}")
	public Category getById(@PathVariable("id") long id) {
		return categoryService.getById(id);
	}

	@PostMapping()
	public Category add(@RequestBody Category category) {
		return categoryService.save(category);
	}

	@PutMapping()
	public Category update(@RequestBody Category category) {
		return categoryService.update(category);
	}

	@DeleteMapping("{id}")
	public void delete(@PathVariable("id") long id) {
		categoryService.deleteById(id);
	}

}
