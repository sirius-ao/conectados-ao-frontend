{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-23.11.tar.gz") {} }:

with pkgs; [
  nodejs_20  # Note the underscore, not hyphen
]
