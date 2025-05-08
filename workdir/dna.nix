{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.chain_of_custody_test_dna =
      inputs.holochain-nix-builders.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          file_storage_integrity =
            inputs'.file-storage.packages.file_storage_integrity;
          file_storage = inputs'.file-storage.packages.file_storage;
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity =
            inputs'.profiles-zome.packages.profiles_integrity;
          profiles = inputs'.profiles-zome.packages.profiles;
          # This overrides all the "bundled" properties for the DNA manifest
          chain_of_custody_integrity =
            self'.packages.chain_of_custody_integrity;
          chain_of_custody = self'.packages.chain_of_custody;
        };
      };
  };
}

