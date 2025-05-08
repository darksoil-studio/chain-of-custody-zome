{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: rec {
    packages.chain_of_custody =
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

  };
}

