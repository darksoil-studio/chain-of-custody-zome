{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: {
    packages.chain_of_custody_integrity =
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };
  };
}

