import { render, screen } from '@testing-library/angular';
import { ProductsListComponent } from './products-list.component';
import userEvent from '@testing-library/user-event';

it('should change the paramter of the search', async () => {
  const submitSpy = jest.fn();
  await render(ProductsListComponent, {
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

it('should change the paramter of the search', async () => {
  const submitSpy = jest.fn();
  await render(ProductsListComponent, {
      componentProperties: {
        search: submitSpy
      },
  });

  const input = screen.getByRole('button');
  userEvent.type(input, 'pohone');
  expect(submitSpy).toHaveBeenCalledWith({
    search: 'iphone' 
})
  

});


it('should open favs modal', async () => {
  await render(ProductsListComponent, {
      componentProperties: {
        modalFavs: false,
      },
  });

  const favs = screen.getByAltText('favsModal');

  userEvent.click(favs);
  expect(modalFavs).toBeTruthy()

});


it('should add 5 more items to the list', async () => {
  const submitSpy = jest.fn();
  await render(ProductsListComponent, {
      componentProperties: {
        viewport: 4,
        seeMore: submitSpy
      },
  });

  const seeMore = screen.getByAltText('seeMore');

  userEvent.click(seeMore);
  expect(viewport).toBe(9);
  expect(submitSpy).toHaveBeenCalled();
  

});