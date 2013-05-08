class RawusersController < ApplicationController
  # GET /rawusers
  # GET /rawusers.json
  def index
    @rawusers = Rawuser.page(params[:page])

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @rawusers }
    end
  end

  # GET /rawusers/1
  # GET /rawusers/1.json
  def show
    @rawuser = Rawuser.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @rawuser }
    end
  end

  # GET /rawusers/new
  # GET /rawusers/new.json
  def new
    @rawuser = Rawuser.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @rawuser }
    end
  end

  # GET /rawusers/1/edit
  def edit
    @rawuser = Rawuser.find(params[:id])
  end

  # POST /rawusers
  # POST /rawusers.json
  def create
    @rawuser = Rawuser.new(params[:rawuser])

    respond_to do |format|
      if @rawuser.save
        format.html { redirect_to @rawuser, notice: 'Rawuser was successfully created.' }
        format.json { render json: @rawuser, status: :created, location: @rawuser }
      else
        format.html { render action: "new" }
        format.json { render json: @rawuser.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /rawusers/1
  # PUT /rawusers/1.json
  def update
    @rawuser = Rawuser.find(params[:id])

    respond_to do |format|
      if @rawuser.update_attributes(params[:rawuser])
        format.html { redirect_to @rawuser, notice: 'Rawuser was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @rawuser.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rawusers/1
  # DELETE /rawusers/1.json
  def destroy
    @rawuser = Rawuser.find(params[:id])
    @rawuser.destroy

    respond_to do |format|
      format.html { redirect_to rawusers_url }
      format.json { head :no_content }
    end
  end

  def import
    Rawuser.import("192.168.0.201")
    redirect_to :action => "index"
  end

  def syncpc
    Employee.synchronize(:to_pc)
    redirect_to "/employees"
  end
end
