import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import  MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test('should  render RestaurantCard component with props data', () => { 

    render(<RestaurantCard  resData={MOCK_DATA}/>); //  unit testing using mock data .
   
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
 });
