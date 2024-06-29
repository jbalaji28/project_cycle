// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BikeRental {
    address public owner;
    uint public rentalPrice = 8 ether; // in Wei
    uint public rentalDuration = 1 hours;

    struct Rental {
        address renter;
        uint startTime;
        bool isActive;
    }

    mapping(uint => Rental) public rentals;
    uint public nextRentalId;

    constructor() {
        owner = msg.sender;
    }

    function rentBike() public payable {
        require(msg.value == rentalPrice, "Incorrect rental price");
        require(!rentals[nextRentalId].isActive, "Bike is already rented");

        rentals[nextRentalId] = Rental({
            renter: msg.sender,
            startTime: block.timestamp,
            isActive: true
        });

        nextRentalId++;
    }

    function endRental(uint rentalId) public {
        Rental storage rental = rentals[rentalId];
        require(rental.isActive, "Rental is not active");
        require(rental.renter == msg.sender, "You are not the renter");

        rental.isActive = false;

        // Refund logic or any other finalization logic
    }

    function getRentalInfo(uint rentalId) public view returns (address, uint, bool) {
        Rental storage rental = rentals[rentalId];
        return (rental.renter, rental.startTime, rental.isActive);
    }
}
