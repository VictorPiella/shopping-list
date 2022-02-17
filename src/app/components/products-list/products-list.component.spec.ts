import { ProductsListComponent } from './products-list.component';
import { fireEvent, render, screen } from '@testing-library/angular';
import { ReactiveFormsModule } from '@angular/forms';
import userEvent from '@testing-library/user-event';

it('should change the paramter of the search', async () => {
  const submitSpy = jest.fn();
  await render(ProductsListComponent, {
      imports: [ReactiveFormsModule],
      componentProperties: {
        filterBy: 'title',
        changeFilter: submitSpy
      },
      
      
  });

  const priceBtn = screen.getByRole('button', {name: /price/i});
  const descriptionBtn = screen.getByRole('button', {name: /description/i});
  const emailBtn = screen.getByRole('button', {name: /email/i});
  const titleBtn = screen.getByRole('button', {name: /title/i});

  userEvent.click(priceBtn);
  expect(submitSpy).toHaveBeenCalledWith('price');

  userEvent.click(descriptionBtn);
  expect(submitSpy).toHaveBeenCalledWith('description');

  userEvent.click(emailBtn);
  expect(submitSpy).toHaveBeenCalledWith('email');

  userEvent.click(titleBtn);
  expect(submitSpy).toHaveBeenCalledWith('title');
  

});

