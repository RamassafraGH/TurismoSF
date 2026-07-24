import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../shared/models/categoria.model';
import { CategoriaService } from '../../shared/services/categoria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categoria-form.html',
  styleUrl: './categoria-form.css',
})
export class CategoriaFormComponent {
  categoria: Categoria = { prefijo: '', nombreCategoria: '' };
  mensaje = '';

  constructor(private categoriaService: CategoriaService) {}

  guardar(): void {
    this.categoriaService.crear(this.categoria).subscribe({
      next: (respuesta) => {
        this.mensaje = `Categoría guardada con ID ${respuesta.idCat}`;
        this.categoria = { prefijo: '', nombreCategoria: '' }; // limpiar formulario
      },
      error: (err) => {
        this.mensaje = 'Error al guardar la categoría';
        console.error(err);
      },
    });
  }
}
