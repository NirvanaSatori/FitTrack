class TargetsController < ApplicationController

    def index
        render json: Target.all, status: :ok
    end


end
