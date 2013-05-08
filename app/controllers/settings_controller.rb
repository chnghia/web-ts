class SettingsController < ApplicationController
  def index
  end

  def show
  end

  def departments
    @departments = Department.page(params[:page])

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @departments }
    end
  end

  def timeshifts
    @timeshifts = Timeshift.page(params[:page])

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @timeshifts }
    end
  end

  def dayoffs
    @dayoffs = Dayoff.page(params[:page])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @dayoffs }
    end
  end

  def messages
  end
end