import { PawHubContainer } from "components/layout/Grid/PetCardFlex";

import Dog from "./dog-cat.jpg";

export default function About() {
  return (
    <PawHubContainer>
      <div className="about__container content-center">
        <section className="paragraph--section">
          <img
            className=" mx-auto mb-3 rounded-2xl w-1/2   "
            src={Dog}
            alt="doggo"
          />
          <h1 className="font-amatic text-5xl font-bold ">
            About FurEver Home
          </h1>
          <p className="my-4">
            Welcome to FurEver Home, your go-to destination for finding loving
            homes for pets in need. At FurEver Home, we believe that every pet
            deserves a warm and caring environment, and every individual
            deserves the joy and companionship that comes with pet ownership.
          </p>
          <p className="my-4">
            At FurEver Home, our mission is to connect pets with compassionate
            individuals and families, creating lasting bonds that enrich the
            lives of both humans and animals. We strive to provide a platform
            where pets in shelters or rescue organizations can find their
            perfect match and begin a new chapter in a loving home.
          </p>
          <p className="my-4">
            Browse through a diverse selection of cats, dogs, and other pets
            available for adoption. Our platform provides detailed profiles and
            images of each pet, making it easier for you to find your perfect
            match.
          </p>
          <p className="my-4">
            Join a community of pet lovers, share your adoption stories, and
            connect with others who have found their furry companions through
            FurEver Home.We collaborate with reputable animal shelters and
            rescue organizations to ensure that every pet listed on our platform
            receives proper care and attention.
          </p>
          <p className="my-4">
            Our team is dedicated to providing support and guidance throughout
            the adoption process, ensuring a seamless and fulfilling experience
            for both you and your new pet.
          </p>
        </section>
      </div>
    </PawHubContainer>
  );
}
